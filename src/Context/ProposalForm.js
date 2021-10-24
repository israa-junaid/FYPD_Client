import React, {createContext, useState} from "react";
export const ProposalFormContext = createContext();
import PropTypes from "prop-types";

export const ProposalFormProvider = ({children}) => {
  //***STATE VALUES FOR THE FORM */
  const [val, setval] = useState({
    category: "",
    reason: "",
    characteristics: "",
    outline: "",
    objectives: "",
    scope: "",
    methodology: "",
    exp_outcomes: "",
    exp_budget: "",
    gant_chart: "",
    alignment: "",
    RecommendationsandApproval:"",
    co_supervisor:"",
    rollNo: ""
  });
  ///***********FOR NORMAL EVENTS*********/
  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setval((ev) => {
      return {...ev, [name]: value};
    });
  };
  ///***********FOR CATEGORY RADIO BUTTONS*********/
  const handleCategory = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setval((ev) => {
      return {...ev, category: value};
    });    
  };
  ///***********FOR CHARACTERISTICS RADIO BUTTONS*********/
  const handleCharacteristics = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setval((ev) => {
      return {...ev, characteristics: value};
    });    
  };

  const value = {
    val: val,
    setval: setval,
    handleChange: handleChange,
    handleCategory: handleCategory,
    handleCharacteristics: handleCharacteristics,
  };

  return (
    <ProposalFormContext.Provider value={value}>
      {children}
    </ProposalFormContext.Provider>
  );
};

ProposalFormProvider.propTypes = {
  children: PropTypes.any,
};