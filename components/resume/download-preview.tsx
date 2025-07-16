"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import dynamic from "next/dynamic";
import { Resume } from "@prisma/client";

import PersonalInfo from "./personal-info";
import EducationInfo from "./education-info";
import ExperienceInfo from "./experience-info";
import SkillsInfo from "./skill-info";
import SummaryInfo from "./summary-info";

const DownloadPreview = ({ resume }: { resume: Resume }) => {
	const componentRef = useRef<HTMLDivElement>(null);

	const printIt = useReactToPrint({
		contentRef: componentRef,
	});

	const downloadAsPDF = async () => {
		if (typeof window === "undefined" || !componentRef.current) return;

		try {
			// 🛡️ Safety check
			if (!resume || !resume.name || !resume.themeColor) {
				console.error("Missing resume fields.");
				return;
			}

			const dataUrl = await toPng(componentRef.current, {
				cacheBust: true,
				quality: 1,
			});

			const pdf = new jsPDF("p", "mm", "a4");
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pxHeight = componentRef.current.offsetHeight;
			const pdfHeight = pxHeight * 0.264; // px to mm

			pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
			pdf.save(`${resume.name?.trim() || "resume"}.pdf`);
		} catch (error) {
			console.error("Error generating PDF:", error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<div className="flex gap-10 mt-5">
				<button
					onClick={downloadAsPDF}
					className="btn btn-success text-white min-w-20"
				>
					Download
				</button>

				<button
					onClick={printIt}
					className="btn btn-success text-white min-w-20"
				>
					Print
				</button>
			</div>

			<div
				ref={componentRef}
				className="shadow-lg space-y-4 w-full sm:w-3/4 print:w-full min-h-52 print:min-h-full p-4 border-b-[10px]"
				style={{ borderColor: resume.themeColor || "#000" }}
			>
				{/* 🛡️ Optional chaining prevents crash */}
				{resume && (
					<>
						<PersonalInfo resume={resume} />
						<SummaryInfo resume={resume} />
						<ExperienceInfo resume={resume} />
						<EducationInfo resume={resume} />
						<SkillsInfo resume={resume} />
					</>
				)}
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(DownloadPreview), {
	ssr: false,
});
