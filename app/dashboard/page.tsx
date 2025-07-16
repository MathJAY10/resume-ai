import ResumeCard from "@/components/resume/resume-card";
import { getUserResumes } from "@/lib/actions";

const DashboardPage = async () => {
	const { data } = await getUserResumes();

	return (
		<section className="w-full px-4 sm:px-6 lg:px-10 py-8">
			{/* 💪 Top-Left Bold Heading */}
			<h2 className="text-4xl font-extrabold text-left mb-8 text-primary">
				🚀 Dashboard
			</h2>

			{/* 📱 Responsive Grid with Proper Gaps */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
			{data?.map((resume) => (
  <div className="w-full" key={resume.id}>
    <ResumeCard resume={resume} />
  </div>
))}

			</div>
		</section>
	);
};

export default DashboardPage;
