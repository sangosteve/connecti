import React, { useState } from "react";
import supabase from "../../supabase.config";
import Router from "next/router";

const login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: pass,
    });

    if (data) Router.replace("/");
    error ? console.log(error) : console.log(data);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-700 flex justify-center items-center">
      <form
        className="px-10 py-8 rounded-sm bg-white shadow flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter your email..."
          className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a pasword..."
          className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          className="px-4 py-2 rounded-sm bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
          onClick={signIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default login;
