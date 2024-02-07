import React from "react"

export function NoteCard(){
    return(
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-line-400">
        <span className='text-sm font-medium text-slate-300'>
          há 4 dias
        </span>
        <p className='text-sm leading-6 text-slate-400'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur ea sint explicabo accusantium voluptatem, labore hic, quaerat earum dolorum atque laudantium ipsum deleniti amet quae adipisci aspernatur cumque? Aliquid.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />

      </div>
    )
}