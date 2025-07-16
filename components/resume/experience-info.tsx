//@ts-nocheck
import { Resume } from "@prisma/client";

const ExperienceInfo = ({
	resume,
}: {
	resume: Omit<Resume, "id" | "createdAt" | "userEmail">;
}) => {
	const experiences = Array.isArray(resume.experience)
		? resume.experience
		: [];

	return (
		<div>
			<h2
				className="font-bold text-2xl text-center"
				style={{ color: resume.themeColor }}
			>
				Professional Experience
			</h2>
			<hr style={{ borderColor: resume.themeColor }} />

			{experiences.length > 0 ? (
				experiences.map((exp, i) => (
					<div key={i} className="mt-4">
						<h2 className="font-medium">{exp.title}</h2>
						<h3 className="font-medium mb-3">{exp.company}</h3>
						<p>{exp.summary}</p>
					</div>
				))
			) : (
				<p className="text-sm text-gray-500 mt-4">No experience added yet.</p>
			)}
		</div>
	);
};

export default ExperienceInfo;
