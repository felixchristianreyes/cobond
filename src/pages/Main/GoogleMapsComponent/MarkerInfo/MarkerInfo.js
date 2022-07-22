import React from "react";
import "./MarkerInfo.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";
const FilledStar = BsFillStarFill;
const UnfilledStar = BsStar;

const MarkerInfo = () => {
  return (
    <div class=" container d-flex justify-content-center align-items-center">
      <div class="markerCard pt-3">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ratings rating-color"></div>
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <UnfilledStar />
          <h5 class="review-count">12 Ratings</h5>
        </div>

        <div class="mt-5 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">Cleanliness</h5>
          <div class="small-ratings rating-color">
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <UnfilledStar />
          </div>
        </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">With Water</h5>
          <div class="small-ratings">
            <p>Yes</p>
          </div>
        </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">With Bidet</h5>
          <div class="small-ratings">
            <p>Yes</p>
          </div>
        </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">Paid</h5>
          <div class="small-ratings">
          <p>No</p>
          </div>
        </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">With Toilet Paper</h5>
          <div class="small-ratings">
          <p>No</p>
          </div>
        </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h5 class="review-stat">Availability</h5>
          <div class="small-ratings">
          <p>24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerInfo;
