import Skeleton from "@/components/shared/skeleton";
import React from "react";

const Loading = () => {
	return (
		<div className="px-6 py-8">
			<h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
			
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</div>
		</div>
	);
};

export default Loading;
