import { ADDMOVIE,  DELETEMOVIE, EDITMOVIE } from "./actionTypes";

export const add = (newMovie ) => {
  return {
    type: ADDMOVIE,payload:newMovie
  };
};

export const del = (id) => {
  return {
    type: DELETEMOVIE,
    payload:id,
  };
};


export const edit = (mov) => {
  return {
    type: EDITMOVIE,
    payload:mov,

  };
};
