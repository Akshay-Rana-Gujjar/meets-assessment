import axios from "axios";
import React, { useEffect, useState } from "react";
import { BuildingIcon, EducationIcon, ExpIcon, LocationIcon } from "../Icons";
import "./styles.css";

const API_URL = "https://api.meetworks.in/users/get_unique_jobseeker_profile";
const API_DATA = { jobseeker_id: "614b410c2c4b197356a37f18" };
const MONTHS_FORMAT_ARRAY = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function ProfileCard() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    getProfileData();
  }, []);

  async function getProfileData() {
    try {
      const response = await axios.post(API_URL, API_DATA);
      response && setProfileData(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log({ error });
    }
  }

  function getFormattedDate(date) {
    const d = new Date(date);

    if (isNaN(d.getTime())) return date;

    return MONTHS_FORMAT_ARRAY[d.getMonth()] + " " + d.getFullYear();
  }

  return (
    <div className="profile-parent-container">
      <div className="profile-container">
        <div className="profile-img">
          {profileData ? <img
            src={profileData?.user_image_url}
            alt="user profile"
            className="profile-img-image"
          />: <div className="profile-img-image"></div>}
        </div>
        <div className="profile-detail-container">
          <div className="profile-username-location">
            <div className={"profile-username "+(!profileData && "text-loading-2")}>
              {profileData?.jobseeker_name}
            </div>
            <div className={"profile-location "+(!profileData && " text-loading-2")}>
              <div className="profile-location-icon">
                <LocationIcon />
              </div>
              {profileData?.area}, {profileData?.city}
            </div>
          </div>
          <div className="profile-experience-container">
            <div className="profile-experience-icon">
              <ExpIcon />
            </div>
            <div className="profile-experience-label">EXPERIENCE</div>
            <div className={"profile-experience-data"+(!profileData && " text-loading-3")}>
              {profileData && Math.round(profileData?.total_months_exp / 12) +" yr(s)"}
            </div>
          </div>
          <div className="profile-company-list">
						<div className={(!profileData && " text-loading-2")} ></div>
						<div className={(!profileData && " text-loading")} ></div>
						<div className={(!profileData && " text-loading-3")} ></div>
            {profileData?.user_experiences?.length > 2
              ? [
                  profileData?.user_experiences[0],
                  profileData?.user_experiences[1],
                ]
                  .map((comp, idx) => (
                    <div className="profile-company-list-item" key={idx}>
                      <div className="profile-company-item-img">
                        {comp.company_logo ? (
                          <img
                            src={comp.company_logo}
                            alt={comp.company_name + "'s logo"}
                            className="profile-company-item-img-image"
                          />
                        ) : (
                          <BuildingIcon />
                        )}
                      </div>
                      <div className="profile-experience-detail">
                        <div className="profile-company-user-post">
                          {comp.user_post}
                        </div>
                        <div className="profile-company-name">
                          {comp.company_name}
                        </div>
                        {comp.company_starting_date && (
                          <div className="profile-compnay-work-years">
                            {getFormattedDate(comp.company_starting_date)} -{" "}
                            {getFormattedDate(comp.company_ending_date)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                  .concat([<div className="see-more">See more</div>])
              : profileData?.user_experiences?.map((comp, idx) => (
                  <div className="profile-company-list-item" key={idx}>
                    <div className="profile-company-item-img">
                      <img
                        src={comp.company_logo}
                        alt={comp.company_name + "'s logo"}
                        className="profile-company-item-img-image"
                      />
                    </div>
                    <div className="profile-experience-detail">
                      <div className="profile-company-user-post">
                        {comp.user_post}
                      </div>
                      <div className="profile-company-name">
                        {comp.company_name}
                      </div>
                      {comp.company_starting_date && (
                        <div className="profile-compnay-work-years">
                          {getFormattedDate(comp.company_starting_date)} -{" "}
                          {getFormattedDate(comp.company_ending_date)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
          </div>
          <div className="profile-education-container">
            <div className="profile-education-icon">
              <EducationIcon />
            </div>
            <div className="profile-education-label">EDUCATION</div>
          </div>
          <div className="profile-education-list">
						<div className={(!profileData && " text-loading-2")} ></div>
						<div className={(!profileData && " text-loading")} ></div>
						<div className={(!profileData && " text-loading-3")} ></div>
            {profileData?.user_qualifications?.map((qualification) => (
              <div className="profile-education-item">
                <div className="profile-education-item-heading">
                  {qualification.course_type}- {qualification.course_name}
                </div>
                <div className="profile-education-item-sub-heading">
                  {qualification.user_college} |{" "}
                  {qualification.user_passing_year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
