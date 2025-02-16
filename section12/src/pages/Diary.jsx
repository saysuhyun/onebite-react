import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viwer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringdDate";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"<"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"Modify"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viwer
        emotionId={emotionId}
        createdDate={createdDate}
        content={content}
      />
    </div>
  );
};

export default Diary;
