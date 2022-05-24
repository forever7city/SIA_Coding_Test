import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import axios from "axios";
import Canvas from "../canvas/Canvas";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Label = () => {
  const [photo, setPhoto] = useState<Photo>();
  const [clickComponent, setClickComponent] = useState<string>("arrow");

  const onClickArrow = () => {
    setClickComponent("arrow");
  };
  const onClickBox = () => {
    setClickComponent("box");
  };

  const checkPost = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          console.log(res.data[0]);
          setPhoto(res.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkPost();
  }, []);

  return (
    <S.Div>
      <S.Option>
        <S.tmpCreation $component={clickComponent} onClick={onClickArrow} />
        <S.tmpBox $component={clickComponent} onClick={onClickBox} />
      </S.Option>
      <Canvas />
      <S.Img src={photo && photo.thumbnailUrl} />
    </S.Div>
  );
};

export default Label;
