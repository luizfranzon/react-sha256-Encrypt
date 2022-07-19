import { CopySimple, LockKey } from "phosphor-react";
import { useState } from "react";
import sha256 from 'crypto-js/sha256';

export function App() {
    const [textareaText, setTextareaText] = useState('')
    const [hashValue, setHashValue] = useState('')

    const hashInput = document.getElementById("hashInput")

    function handleChange(event) {
        setTextareaText(event.target.value)
    }

    function handleHashSum() {
        const hash = sha256(textareaText)
        setHashValue(hash)
    }

    function handleCopyHashValue() {
        navigator.clipboard.writeText(hashInput.value)
        alert("Hash copied to your clipboard!")
    }

    return (
        <div className="flex items-center justify-start flex-col">

            <h1 className="md:text-7xl text-4xl my-10 md:my-20 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-[#0096ee] to-[#9bdaff]">SHA256 <span className="text-[#6B37FF]">Encrypt </span></h1>

            <div className="flex flex-col items-center gap-6">

                <textarea onChange={handleChange} className="w-[300px] md:w-[800px] bg-[#262626] rounded-2xl resize-none h-[250px] p-4 text-white font-['Inter'] md:text-lg"
                    placeholder="Insert your text here...">
                </textarea>

                <button id="copyButton" onClick={handleHashSum} className="mb-6 text-white font-bold bg-[#1E6F9F] md:hover:bg-[#3998cf]  transition-colors duration-300 rounded-2xl w-52 h-14 flex items-center justify-center gap-1 text-2xl">
                    <LockKey size={36} color="#ffffff" />
                    Encrypt
                </button>

                <div className="flex items-center justify-center flex-row relative">
                    <input id="hashInput" value={hashValue} type="text" placeholder="Hash result" className="w-[80vw] md:text-lg bg-[#262626] rounded-2xl resize-none md:w-[800px] h-[60px] p-4 text-white font-['Inter'] text-center" />
                    <button data-clipboard-target="hashInput" title="Copy hash to the clipboard." onClick={handleCopyHashValue} className="absolute top-[75px] md:right-[18px] md:top-[16px]">
                        <CopySimple size={28} color="#757575" className="hover:color-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}
