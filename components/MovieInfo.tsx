import React from "react";
import { API_URL } from "../app/(home)/page";

const getInfo = async (id: string) => {
  //throw new Error("Error!!");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const info = await getInfo(id);
  return <div>{JSON.stringify(info)}</div>;
};

export default MovieInfo;
