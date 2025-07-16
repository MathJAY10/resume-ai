"use client";
import { useEffect, useContext } from "react";
import StepsNav from "@/components/steps/steps-nav";
import BasicInfoCreate from "@/components/steps/basic-info-create";
import { ResumeContext } from "@/context/resume";

const CreateResume = () => {
	const ctx = useContext(ResumeContext);

	useEffect(() => {
		// ✅ Remove old resume data on "create new"
		localStorage.removeItem("resume");
		ctx?.setResume({
			name: "",
			email: "",
			phone: "",
			title: "",
			address: "",
			skill: [],
			experience: [],
			education: [],
			summary: "",
			themeColor: "",
		});
	}, []);

	return (
		<div className="flex flex-col gap-4 items-center justify-center h-screen">
			<StepsNav />
			{ctx?.step === 1 && <BasicInfoCreate />}
		</div>
	);
};

export default CreateResume;
