import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef HOOK
  const passwordRef = useRef(null);

  //useCallback HOOK
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_{}[]";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, password, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    //copy
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect HOOK
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-center p-3 my-3">Password Generator</h1>
        {/* INPUT */}
        <div className=" shadow rounded-lg overflow-hidden mb-4 flex p-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-s-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button onClick={copyPasswordToClipboard}>copy</button>
        </div>

        {/* OTHER INPUTS */}
        <div className="flex justify-center text-sm gap-x-4 text-gray-400 items-center pb-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="flex flex-row gap-1">
              Length: <p className="text-orange-500">{length}</p>
            </label>
          </div>
          <div>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                defaultChecked={numAllow}
                onChange={() => setNumAllow((prev) => !prev)}
                className="accent-orange-500"
              />
              NUM
            </label>
          </div>
          <div>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                onChange={() => setCharAllow((prev) => !prev)}
                className="accent-orange-500"
              />
              CHARACTER
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
