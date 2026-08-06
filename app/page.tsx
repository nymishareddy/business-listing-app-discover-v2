"use client";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import { useState, useEffect } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (activeTab === "home") getPlaceList("Hotels in New York");
  }, [activeTab]);

  const getPlaceList = async (value: string) => {
    const result = await fetch("/api/google-place-api?q=" + value);
    const data = await result.json();
    setPlaceList(data.resp.results);
  };

  return (
    <div>
      <Header onTabChange={(tab: string) => setActiveTab(tab)} />

      {activeTab === "home" && (
        <>
          <Hero userInput={(value: string) => getPlaceList(value)} />
          {placeList ? <PlaceList placeList={placeList} /> : null}
        </>
      )}

      {activeTab === "about" && <AboutUs />}
      {activeTab === "contact" && <ContactUs />}
    </div>
  );
}
