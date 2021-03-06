import React from 'react'
import {
    FaInbox,
    FaCalendar,
    FaRegCalendar,
    FaRegCalendarAlt,
    FaChevronDown
} from 'react-icons/fa'
export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span> <FaInbox /> </span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span> <FaCalendar /> </span>
                    <span>Today</span>
                </li>
                <li>
                    <span> <FaRegCalendarAlt /> </span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className="sidebar__middle">
                <span>
                    <FaChevronDown/>
                </span>
                <h2>Projects</h2>
            </div>
            
            <ul className="sidebar__projects">project will be here!!!</ul>
            
            {/* AddProject Component Here! */}
                AddProject Component Here!
        </div>
    )
}
