import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  // { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  // { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  // { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  // { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
