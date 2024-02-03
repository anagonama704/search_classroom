"use client";
import { useEffect, useState } from "react";

type test = {
  id: number;
  name: string;
};
function Home() {
  const [test, setTest] = useState<test[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/books"); // ローカルホストへのリクエストは相対パスで指定可能
        const data = await response.json();
        setTest(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {}, [test]);

  return (
    <>
      {test &&
        test.map((testman) => (
          <>
            <p key={testman.id}>{testman.name}</p>
          </>
        ))}
    </>
  );
}

export default Home;
