import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [otp, setOtp] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const inputs = useRef([]);
  const numb = ["one", "two", "three", "four", "five", "six"];

  function handleChange(index: number, e: any) {
    console.log("handleChange called");
    const { name, value } = e.target;
    if (value && index <= 5) {
      document.getElementById(`otp-${index + 2}`)?.focus();
    }
    if (!value && index <= 5 && index !== -1) {
      document.getElementById(`otp-${index}`)?.focus();
    }
    setOtp((prev) => ({ ...prev, [name]: value }));
  }

  function submit() {
    alert(
      `OTP ${otp.one}${otp.two}${otp.three}${otp.four}${otp.five}${otp.six}`
    );
  }
  function clear() {
    window.location.reload();
  }
  return (
    <div className="border border-white h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="w-[420px] h-[500px] rounded-sm ring-1 p-3 flex flex-col gap-2 justify-between">
        <h2 className="font-bold text-2xl">One Time Password Verfication</h2>
        <p>
          Enter the OTP sent to your registered email or device to ensure a
          secure and smooth access to your account.
        </p>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            {numb.map((item: string, index: number) => (
              <input
                key={index}
                id={`otp-${index + 1}`}
                onChange={(e) => handleChange(index, e)}
                name={item}
                value={otp.item}
                type="text"
                maxLength={1}
                placeholder="-"
                className="h-[60px] w-[60px] rounded-full  text-center appearance-none hover:appearance-none flex items-center justify-center shadow-sm shadow-white"
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-blue-500 font-semibold text-center text-md">
              Resend code
            </p>
            <p className="text-blue-500 font-semibold text-center text-md">
              Edit Email
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={submit}
              className="hover:ring-green-500 hover:ring-1 hover:border-none text-gray-600 hover:text-green-500"
            >
              Continue
            </button>
            <button
              onClick={clear}
              className="hover:ring-1 text-gray-600 hover:text-gray-200 hover:border-none ring-red-600 hover:text-red-600"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
