import { CopySimple, LockKey } from "phosphor-react";
import { useState } from "react";
import sha256 from 'crypto-js/sha256';

export function App() {

    const [textareaText, setTextareaText] = useState()
    const [hashValue, setHashValue] = useState()

    function handleChange(event) {
        setTextareaText(event.target.value)
    }

    function handleHashSum() {
        const hash = sha256(textareaText)
        setHashValue(hash)
    }

    function handleCopyHashValue() {
        navigator.clipboard.writeText(hashValue)
        alert("Hash copied to the clipboard!")
    }

    return (
        <div className="flex items-center justify-start flex-col">

            <h1 className="my-20 font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#0096ee] to-[#9bdaff]">SHA256 <span className="text-[#6B37FF]">Encrypt </span></h1>

            <div className="flex flex-col items-center gap-6">

                <textarea onChange={handleChange} className="bg-[#262626] rounded-2xl resize-none w-[800px] h-[250px] p-4 text-white font-['Inter']"
                    placeholder="Insert your text here...">
                </textarea>

                <button onClick={handleHashSum} className="mb-6 text-white font-bold bg-[#1E6F9F] hover:bg-[#3998cf] transition-colors duration-300 rounded-2xl w-52 h-14 flex items-center justify-center gap-1 text-2xl">
                    <LockKey size={36} color="#ffffff" />
                    Encrypt
                </button>

                <div className="flex items-center justify-center flex-row relative">
                    <input value={hashValue} type="text" placeholder="Hash result" className="text-lg bg-[#262626] rounded-2xl resize-none w-[800px] h-[60px] p-4 text-white font-['Inter'] text-center" />
                    <button title="Copy hash to the clipboard." onClick={handleCopyHashValue} className="absolute right-[18px]">
                        <CopySimple size={28} color="#757575" className="hover:color-white"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
