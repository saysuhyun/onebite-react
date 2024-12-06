import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("default name");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      {/* 입력값이 e라는 매개변수로 이벤트에 들어가서 확인 가능  */}
      <div>
        <input value={name} onChange={onChangeName} placeholder={"name"} />
        {name}
      </div>

      <div>
        <input value={birth} type="date" onChange={onChangeBirth} />
        {birth}
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">korea</option>
          <option value="america">usa</option>
          <option value="kingdom">uk</option>
        </select>
        {country}
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
  );
};

export default Register;
