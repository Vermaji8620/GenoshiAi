import { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    cost: "$4/month/user",
    graphsLimit: "Up to 10 graphs",
    queriesLimit: "Up to 500 chatbot queries",
    features: ["basic Feature 1", " basic Feature 2", "basic Feature 3"],
  },
  {
    id: 2,
    name: "Pro Plan",
    cost: "$8/month/user",
    graphsLimit: "Up to 50 graphs",
    queriesLimit: "Up to 1000 chatbot queries",
    features: ["pro Feature 1", "pro Feature 2", "pro Feature 3"],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    cost: "Contact for price",
    graphsLimit: "Unlimited graphs",
    customPDFs: "Ability to upload custom PDFs",
    support: "24/7 phone + email support",
    features: ["Pro feature 1", "Pro Feature 2"],
  },
];

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="pricing-page-container flex flex-col gap-10">
      <h2 className="text-4xl">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-plan-card ${
              selectedPlan.id === plan.id ? "selected" : ""
            } bg-slate-600 p-3 rounded-lg uppercase`}
            onClick={() => handlePlanSelect(plan)}
          >
            <h3>{plan.name}</h3>
            <p>{plan.cost}</p>
            <p>{plan.graphsLimit}</p>
            <p>{plan.queriesLimit}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {plan.customPDFs && <p>{plan.customPDFs}</p>}
            {plan.support && <p>{plan.support}</p>}
          </div>
        ))}
      </div>

      <div className="selected-plan-details">
        <h3>Selected Plan: {selectedPlan.name}</h3>
        <p>{selectedPlan.cost}</p>
        <p>{selectedPlan.graphsLimit}</p>
        <p>{selectedPlan.queriesLimit}</p>
        <ul>
          {selectedPlan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {selectedPlan.customPDFs && <p>{selectedPlan.customPDFs}</p>}
        {selectedPlan.support && <p>{selectedPlan.support}</p>}
      </div>
    </div>
  );
};

export default PricingPage;
