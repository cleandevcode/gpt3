import { Loading } from "components/shared";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { injectReducer } from "store";
import Activities from "views/project/ProjectDashboard/components/Activities";
import MyTasks from "views/project/ProjectDashboard/components/MyTasks";
import ProjectDashboardHeader from "views/project/ProjectDashboard/components/ProjectDashboardHeader";
import Projects from "views/project/ProjectDashboard/components/Projects";
import Schedule from "views/project/ProjectDashboard/components/Schedule";
import TaskOverview from "views/project/ProjectDashboard/components/TaskOverview";
import reducer from "views/project/ProjectDashboard/store";
import { getProjectDashboardData } from "views/project/ProjectDashboard/store/dataSlice";

injectReducer("projectDashboard", reducer);

const UserStatistics = () => {
  const dispatch = useDispatch();
  const {
    userName,
    taskCount,
    projectOverviewData,
    myTasksData,
    scheduleData,
    projectsData,
    activitiesData,
  } = useSelector((state) => state.projectDashboard.data.dashboardData);
  const loading = useSelector((state) => state.projectDashboard.data.loading);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    dispatch(getProjectDashboardData());
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">User Statistics</h3>
      <Loading loading={loading}>
        <ProjectDashboardHeader data={{ userName, taskCount }} />
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex flex-col gap-4 flex-auto">
            <TaskOverview data={projectOverviewData} />
            <MyTasks data={myTasksData} />
            <Projects data={projectsData} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="xl:w-[380px]">
              <Schedule data={scheduleData} />
              <Activities data={activitiesData} />
            </div>
          </div>
        </div>
      </Loading>
    </div>
  );
};

export default UserStatistics;
