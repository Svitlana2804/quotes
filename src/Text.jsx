import React, { useEffect, useState } from "react";
import { TextBody, Refresh, Description } from "./Text.style";
import { FcProcess } from "react-icons/fc";
import { getQuotes } from "./api/quotes";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const data = await getQuotes();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
    }
  };

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };
  return (
    <>
      <Refresh type="button" onClick={handleRefresh}>
              <FcProcess />
              <Description>Натисни тут, і побачиш нову цитату</Description>
      </Refresh>
      {quote && (
        <div>
          <TextBody>
            {quote[Math.floor(Math.random() * quote.length)].text} -
            {quote[Math.floor(Math.random() * quote.length)].author}
          </TextBody>
        </div>
      )}
    </>
  );
}
