import create from "zustand";

export  const useStore  = create((set)=>({
    terture: 'dirt',
    cubes: [],
    addCube: ()=>{},
    removeCube: ()=>{},
    setTexture: ()=>{},
    saveWorld: ()=>{},
    resetWorld: ()=>{},
}));