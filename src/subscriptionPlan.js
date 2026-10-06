export const SUBSCRIPTION_PLAN_STORAGE_KEY = "summarist-subscription-plan";
const SUBSCRIPTION_PLAN_CHANGE_EVENT = "summarist-subscription-plan-change";
const BASIC_PLAN = { id: "basic", name: "Basic", price: "Free" };

export const subscriptionPlans = [
  { id: "premium-plus", name: "Premium Plus Yearly", price: "$99.99/year" },
  { id: "premium", name: "Premium Monthly", price: "$9.99/month" },
];

export function getStoredSubscriptionPlan() {
  if (typeof window === "undefined") {
    return BASIC_PLAN;
  }

  const storedPlanId = window.localStorage.getItem(
    SUBSCRIPTION_PLAN_STORAGE_KEY,
  );

  return (
    subscriptionPlans.find((plan) => plan.id === storedPlanId) ??
    BASIC_PLAN
  );
}

export function subscribeToSubscriptionPlan(onStoreChange) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SUBSCRIPTION_PLAN_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SUBSCRIPTION_PLAN_CHANGE_EVENT, onStoreChange);
  };
}

export function getSubscriptionPlanSnapshot() {
  return getStoredSubscriptionPlan().name;
}

export function getServerSubscriptionPlanSnapshot() {
  return BASIC_PLAN.name;
}

export function saveSubscriptionPlan(planId) {
  const plan = subscriptionPlans.find((item) => item.id === planId);

  if (!plan) {
    throw new Error(`Unknown subscription plan: ${planId}`);
  }

  window.localStorage.setItem(SUBSCRIPTION_PLAN_STORAGE_KEY, plan.id);
  window.dispatchEvent(new Event(SUBSCRIPTION_PLAN_CHANGE_EVENT));
}
