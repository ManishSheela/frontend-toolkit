import { useEffect, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./RetryApiCall.jsx?raw";

async function retry(fn, attempts) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    console.log(`Attempt ${attempt}`);

    try {
      const result = await fn();

      // Success → immediately stop retrying
      return result;
    } catch (error) {
      // Failure → save the error
      lastError = error;

      console.log(`Attempt ${attempt} failed`);
    }
  }

  // All attempts failed
  throw lastError;
}

async function fetchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

export default function RetryApiCall() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function main() {
      try {
        const result = await retry(fetchPost, 3);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    }

    main();
  }, []);

  return (
    <>
      <LearningBox className="gap-3 shadow-xs text-white text-sm text-left">
        <p>
          <strong>Retry API Call</strong>
        </p>

        <p>The request retries up to three times when the API call fails.</p>

        {data && (
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        {error && <p>Final Error: {error}</p>}
      </LearningBox>

      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
}
