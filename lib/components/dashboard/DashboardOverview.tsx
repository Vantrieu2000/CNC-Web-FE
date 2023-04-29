import { DashboardDto, UserOnlineWeekDto } from '@/dto/dashboard';
import clsx from 'clsx';
import { UserType } from 'lib/enum/user';
import { useState } from 'react';
import dayjs from 'dayjs';
const ActiveMonth = ['This Month', 'Last Month'];

function ToWeeksList(days: number, month: number) {
    /* eslint-disable react/jsx-key */
    return [
        <span>
            {month}/1 <span>~</span> {month}/6
        </span>,
        <span>
            {month}/7 <span>~</span> {month}/13
        </span>,
        <span>
            {month}/14 <span>~</span> {month}/20
        </span>,
        <span>
            {month}/21 <span>~</span> {month}/27
        </span>,
        days > 28 ? (
            <span>
                {month}/28 <span>~</span> {month}/{days}
            </span>
        ) : (
            <span>{month}/28 </span>
        ),
        ``,
    ];
}

export const DashboardOverview = (props: { data: DashboardDto }) => {
    const { data } = props;
    const [value, setValue] = useState<string | number>(ActiveMonth[0]);

    const momentObj: {
        [key: string | number]: {
            month: number;
            days: number;
        };
    } = {
        statisticUserOnlineOnWeek: {
            month: dayjs().month() + 1,
            days: dayjs().daysInMonth(),
        },
        statisticUserOnlineOnWeekLastMonth: {
            month: dayjs().subtract(1, 'month').month() + 1,
            days: dayjs().subtract(1, 'month').daysInMonth(),
        },
    };

    return (
        <div className="dashboard-overview">
            <div className="dashboard-overview-section">
                <div className="dashboard-overview-section__title">Active</div>
                <div className="dashboard-overview-section__segment">
                    {ActiveMonth.map((month) => (
                        <span key={month} className={clsx('segment', value === month && '__active')} onClick={() => setValue(month)}>
                            {month}
                        </span>
                    ))}
                </div>

                <div className="section-active__table">
                    {ToWeeksList(momentObj[value]?.days || 31, momentObj[value]?.month || 1).map((date, index) => (
                        <div className="section-active__table-cell" key={index}>
                            <div className="__date">{date}</div>
                            <div className="__number">
                                {date != ''
                                    ? ((data[value] as UserOnlineWeekDto[]) || []).find((x) => (parseInt(`${x.week}`) || 0) === index + 1)
                                          ?.value || 0
                                    : ''}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dashboard-overview-section">
                <div className="dashboard-overview-section__title">User Type</div>
                <div className="section-type">
                    <div className="section-type__cell">
                        <div className="__type">Deliver</div>
                        <div className="__number">{data.typeToC?.find((x) => x.type === UserType.DELIVER)?.total || 0}</div>
                    </div>
                    <div className="section-type__cell">
                        <div className="__type">Receive</div>
                        <div className="__number">{data.typeToC?.find((x) => x.type === UserType.RECEIVE)?.total || 0}</div>
                    </div>
                    <div className="section-type__cell">
                        <div className="__type">Paid</div>
                        <div className="__number">{data.typeKenjin?.find((x) => x.type === 1)?.total || 0}</div>
                    </div>
                </div>
            </div>
            <div className="dashboard-overview-section">
                <div className="dashboard-overview-section__title">User Age</div>
                <div className="section-age">
                    <div className="section-age__container">
                        {Ages.map((age) => (
                            <div className="section-age__cell" key={age}>
                                <div className="__age">
                                    {age}{age == 70 ? '+' : ''} Year old
                                </div>
                                <div className="__number">{data.ageToC.find((x) => x.age === age)?.total || 0}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Ages = [10, 20, 30, 40, 50, 60, 70];
