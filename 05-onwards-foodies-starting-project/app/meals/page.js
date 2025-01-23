import React, { Suspense } from "react";
import classes from "@/app/meals/page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export default function MealsPage() {

  

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
          <p>
            {" "}
            Choose your favorite recipe and kook it yourself. It is an easy and
            fun.{" "}
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
        <Meals/>
        </Suspense>
       
      </main>
    </>
  );
}
