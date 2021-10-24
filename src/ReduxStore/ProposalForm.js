import { PROPOSAL_DATA } from "./Actions";

const initialstate = {
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
    rollNo:""
};
export default function ProposalFormRed(state = initialstate, action) {
  switch (action.type) {
    case PROPOSAL_DATA:
      return {
        ...state,

        category: action.payload.category,
        reason: action.payload.reason,
        characteristics: action.payload.characteristics,
        outline: action.payload.outline,
        objectives: action.payload.objectives,
        scope: action.payload.scope,
        methodology: action.payload.methodology,
        exp_outcomes: action.payload.exp_outcomes,
        exp_budget: action.payload.exp_budget,
        alignment: action.payload.alignment,
        RecommendationsandApproval:action.payload.RecommendationsandApproval,
        co_supervisor: action.payload.co_supervisor,
      };

    default:
      return state;
  }
}