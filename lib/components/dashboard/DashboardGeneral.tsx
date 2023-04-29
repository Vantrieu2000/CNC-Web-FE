import { DashboardDto } from "@/dto/dashboard";

export const DashboardGeneral = (props: { data: DashboardDto }) => {
    const { data } = props;

    return (
        <div className="dashboard-general">
            <div className="dashboard-general__item">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Weekly</div>
                    <div className="dashboard-general__item__content-number number">{data.userOnlineInOneWeek}</div>
                </div>
            </div>
            <div className="dashboard-general__item">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Monthly</div>
                    <div className="dashboard-general__item__content-number number">{data.userOnlineInOneMonth}</div>
                </div>
            </div>
            <div className="dashboard-general__item">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Total User</div>
                    <div className="dashboard-general__item__content-number number">{data.fullToC}</div>
                </div>
            </div>
            <div className="dashboard-general__item">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Total Company </div>
                    <div className="dashboard-general__item__content-number number">{data.fullToB}</div>
                </div>
            </div>
            <div className="dashboard-general__item matching">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Matched rate</div>
                    <div className="dashboard-general__item__content-number number">{data.matchingRatio}%</div>
                </div>
            </div>
            <div className="dashboard-general__item message">
                <div className="dashboard-general__item__content">
                    <div className="dashboard-general__item__content-title">Reply rate</div>
                    <div className="dashboard-general__item__content-number number">{data.ratioReply}%</div>
                </div>
            </div>
        </div>
    );
};
