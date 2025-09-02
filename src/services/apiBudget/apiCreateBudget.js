import supabase from "../supabase";

export async function apiCreateBudget({
  budgetName,
  maximumSpend,
  budgetThemeColor,
}) {
  const {
    data: { user: currentUser },
    error: errorUser,
  } = await supabase.auth.getUser();

  if (errorUser) throw new Error("User not logged in");

  const addedBudgetName = budgetName;
  const addedMaximumSpend = maximumSpend;
  const addedBudgetThemeColor = budgetThemeColor;

  const { error: budgetError } = await supabase.from("budgets").insert([
    {
      user_id: currentUser.id,
      budgetName: addedBudgetName,
      maximumSpend: addedMaximumSpend,
      budgetThemeColor: addedBudgetThemeColor,
    },
  ]);

  if (budgetError) throw new Error(budgetError.message);

  return { addedBudgetName, addedMaximumSpend, addedBudgetThemeColor };
}
