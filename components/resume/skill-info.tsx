//@ts-nocheck
import { Resume } from "@prisma/client";

const SkillsInfo = ({
	resume,
}: {
	resume: Omit<Resume, "id" | "createdAt" | "userEmail">;
}) => {
	return (
		<div>
			<h2
				className="font-bold text-2xl text-center mb-2"
				style={{ color: resume.themeColor }}
			>
				Skills
			</h2>
			<hr className="mb-4" style={{ borderColor: resume.themeColor }} />

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{resume.skill.map((skill, i) => (
					<div key={i} className="flex flex-col gap-1">
						<h2 className="font-bold">{skill?.name}</h2>
						<progress
							value={skill?.rating}
							max={5}
							className="progress progress-success w-full"
						></progress>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsInfo;
