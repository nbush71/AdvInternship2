"use client";

import { useSyncExternalStore } from "react";
import { useAuth } from "@/src/AuthContext";
import {
  getServerSubscriptionPlanSnapshot,
  getSubscriptionPlanSnapshot,
  subscribeToSubscriptionPlan,
} from "@/src/subscriptionPlan";
import { getFunctions, httpsCallable } from "firebase/functions";

function SubStatus() {
  const { user } = useAuth();
  const plan = useSyncExternalStore(
    subscribeToSubscriptionPlan,
    getSubscriptionPlanSnapshot,
    getServerSubscriptionPlanSnapshot,
  );

  const handleManageSubscription = async () => {
    try {
      const functions = getFunctions();

      const createPortalLink = httpsCallable(
        functions,
        "ext-firestore-stripe-payments-createPortalLink",
      );

      const { data } = await createPortalLink({
        returnUrl: window.location.href,
      });

      window.location.assign(data.url);
    } catch (error) {
      console.error("Portal error:", error);
    }
  };

  return (
    <div className="block p-10 w-full">
      <div className="block max-w-267.5 w-full mr-auto ml-auto pr-6 pl-6">
        <div className="text-left border-b border-solid border-brand-searchgray pb-4 text-[32px] text-brand-darkteal mb-8 font-bold ">
          Settings
        </div>
        <div className="flex flex-col items-start gap-4 mb-8 border-b border-solid border-brand-searchgray pb-6">
          <div className="block text-xl font-bold text-brand-darkteal ">
            Your Subscription plan
          </div>
          <div className="block text-brand-darkteal text-xl">{plan}</div>
          <button
            onClick={() => {
              if (plan === "Basic") {
                window.location.href = "/ChoosePlan";
              } else {
                handleManageSubscription();
              }
            }}
            className="flex items-center justify-center min-w-45 text-brand-darkteal h-10 rounded-sm text-base bg-brand-green w-fit transition-colors duration-200 ease-in-out cursor-pointer border-0"
          >
            {plan === "Basic" ? "Upgrade to Premium" : "Manage Subscription"}
          </button>
        </div>
        <div className="flex flex-col content-start gap-2 pb-6 last:mb-0 last:border-b-0">
          <div className="block text-lg font-bold text-brand-darkteal">
            Email
          </div>
          <div className="block text-brand-darkteal">{user.email}</div>
        </div>
      </div>
    </div>
  );
}

export default SubStatus;
