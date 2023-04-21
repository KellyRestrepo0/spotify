import React from "react";

export function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src='https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/banner.jpg?alt=media&token=340f547d-18be-40a0-a87b-0544baa56414' class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/banner4.jpg?alt=media&token=cd7d5475-8590-4f92-a4ac-50eda2b03312' class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/banner3.png?alt=media&token=06159d3e-77a5-44f8-8de3-01fde8128bce' class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
