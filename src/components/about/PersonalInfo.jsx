import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kareem" },
  { meta: "last name", metaInfo: "Mohamed" },
  { meta: "Age", metaInfo: "28 Years" },
  { meta: "Nationality", metaInfo: "British" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "London" },
  { meta: "phone", metaInfo: "+447490129158" },
  { meta: "Email", metaInfo: "kareem94@hotmail.co.uk" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English, Arabic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
    {personalInfoContent.map((val, i) => (
      <li key={i} style={{ overflow: 'scroll' }}>
        <span className="title">{val.meta}: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          {val.metaInfo}
        </span>
      </li>
    ))}
  </ul>
  
  );
};

export default PersonalInfo;
