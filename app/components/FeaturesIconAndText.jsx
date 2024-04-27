import React from "react";
import { FaMountain } from "react-icons/fa6";
import { PiSunHorizonBold } from "react-icons/pi";
import { GiArabicDoor } from "react-icons/gi";
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { GiJasmine } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaCarSolid } from "react-icons/lia";
import { PiFlowerTulip } from "react-icons/pi";
import { TbGrill } from "react-icons/tb";
import { PiPawPrintLight } from "react-icons/pi";
import { RiBilliardsLine } from "react-icons/ri";
import { BiSolidWasher } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

export default function FeaturesIconAndText({ features }) {
  return (
    <>
      {features?.wifi && (
        <div className="flex flex-row items-center gap-5">
          <FaWifi className="w-7 h-7" />

          <p className="text-lg">Wifi</p>
        </div>
      )}
      {features?.mountainView && (
        <div className="flex flex-row items-center gap-5">
          <FaMountain className="w-7 h-7" />

          <p className="text-lg">Mountain view</p>
        </div>
      )}
      {features?.beachAccess && (
        <div className="flex flex-row items-center gap-5">
          <PiSunHorizonBold className="w-7 h-7" />

          <p className="text-lg">Beach access</p>
        </div>
      )}
      {features?.nearbyAttractions && (
        <div className="flex flex-row items-center gap-5">
          <GiArabicDoor className="w-7 h-7" />

          <p className="text-lg">Nearby Attractions</p>
        </div>
      )}
      {features?.uniqeExperiance && (
        <div className="flex flex-row items-center gap-5">
          <GiJasmine className="w-7 h-7" />

          <p className="text-lg">Uniqe Experiance</p>
        </div>
      )}

      {features?.pool && (
        <div className="flex flex-row items-center gap-5">
          <FaSwimmingPool className="w-7 h-7" />

          <p className="text-lg">Swimming pool</p>
        </div>
      )}
      {features?.airConditioning && (
        <div className="flex flex-row items-center gap-5">
          <TbAirConditioning className="w-7 h-7" />

          <p className="text-lg">Air conditioning</p>
        </div>
      )}
      {features?.kitchen && (
        <div className="flex flex-row items-center gap-5">
          <TbToolsKitchen2 className="w-7 h-7" />

          <p className="text-lg">Kitchen</p>
        </div>
      )}
      {features?.tv && (
        <div className="flex flex-row items-center gap-5">
          <SlScreenDesktop className="w-6 h-6" />

          <p className="text-lg">TV</p>
        </div>
      )}
      {features?.refrigerator && (
        <div className="flex flex-row items-center gap-5">
          <CgSmartHomeRefrigerator className="w-7 h-7" />

          <p className="text-lg">Refrigerator</p>
        </div>
      )}
      {features?.parking && (
        <div className="flex flex-row items-center gap-5">
          <LiaCarSolid className="w-7 h-7" />

          <p className="text-lg">Parking</p>
        </div>
      )}
      {features?.garden && (
        <div className="flex flex-row items-center gap-5">
          <PiFlowerTulip className="w-7 h-7" />

          <p className="text-lg">Garden</p>
        </div>
      )}
      {features?.grill && (
        <div className="flex flex-row items-center gap-5">
          <TbGrill className="w-7 h-7" />

          <p className="text-lg">Grill</p>
        </div>
      )}
      {features?.pets && (
        <div className="flex flex-row items-center gap-5">
          <PiPawPrintLight className="w-7 h-7" />

          <p className="text-lg">Pets allowed</p>
        </div>
      )}
      {features?.billiards && (
        <div className="flex flex-row items-center gap-5">
          <RiBilliardsLine className="w-7 h-7" />

          <p className="text-lg">Billiards</p>
        </div>
      )}
      {features?.washer && (
        <div className="flex flex-row items-center gap-5">
          <BiSolidWasher className="w-7 h-7" />

          <p className="text-lg">Washer</p>
        </div>
      )}
    </>
  );
}
