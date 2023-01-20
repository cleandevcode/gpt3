import { Loading } from "components/shared";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { injectReducer } from "store";
import LeadByCountries from "views/crm/CrmDashboard/components/LeadByCountries";
import Leads from "views/crm/CrmDashboard/components/Leads";
import { getCrmDashboardData } from "views/crm/CrmDashboard/store/dataSlice";
import reducer from "views/crm/CrmDashboard/store";

injectReducer("crmDashboard", reducer);

const MapOfUsers = () => {
  const dispatch = useDispatch();
  const { leadByRegionData, recentLeadsData } = useSelector(
    (state) => state.crmDashboard.data.dashboardData
  );
  const loading = useSelector((state) => state.crmDashboard.data.loading);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    dispatch(getCrmDashboardData());
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <h3 className="mb-5">Maps Of Users</h3>
      <Loading loading={loading}>
        <LeadByCountries data={leadByRegionData} />
        <Leads data={recentLeadsData} className="mt-3" />
      </Loading>
    </div>
  );
};

export default MapOfUsers;
