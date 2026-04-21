import React, { useState } from 'react';
import MobileTool from '../Components/MobileTool';
import PageHeaderBack from '../Components/PageHeaderBack';
import ProfilePreviewCard from '../Components/ProfilePreviewCard';
import TaskSummaryCard from '../Components/TaskSummaryCard';
import SelectionOption from '../Components/SelectionOption';
import SafetyFirst from '../Components/SafetyFirst';
import TaskCard from '../Components/TaskCard';
import PrimaryButton from '../Components/PrimaryButton';
import './APPLY FOR THE task.css';

const taskImage =
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop';
const gridCat =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop';

const similarTasks = [
    {
        id: 's1',
        title: 'Pet feed',
        subtitle: 'Getting the dog to walk around the ho...',
        price: '24',
    },
    {
        id: 's2',
        title: 'Cat company',
        subtitle: 'Getting Glammed for work event',
        price: '24',
    },
    {
        id: 's3',
        title: 'Pet feed',
        subtitle: 'Getting the dog to walk around the ho...',
        price: '24',
    },
    {
        id: 's4',
        title: 'Cat company',
        subtitle: 'Getting Glammed for work event',
        price: '24',
    },
];

const ApplyForTheTask = () => {
    const [msgLen, setMsgLen] = useState(0);
    const [availability, setAvailability] = useState('available');

    return (
        <div className="apply-for-task-page">
            <MobileTool />
            <div className="apply-for-task-page__scroll">
                <div className="apply-for-task-page__inner">
                    <PageHeaderBack title="APPLY FOR THE task" />

                    <ProfilePreviewCard />
                    <p className="apply-for-task-page__profile-caption">
                        This is how your profile appears to the task poster.
                    </p>

                    <TaskSummaryCard
                        imageUrl={taskImage}
                        metaRows={[
                            { type: 'date', text: 'Mon, Feb 16' },
                            { type: 'time', text: '10:00 AM – 2:00 PM' },
                            { type: 'location', text: 'Maadi, Cairo' },
                        ]}
                    />

                    <section className="apply-for-task-page__section">
                        <div className="apply-for-task-page__label-row">
                            <span className="apply-for-task-page__label">
                                Application Message (Recommended)
                            </span>
                            <span className="apply-for-task-page__count">{msgLen}/200</span>
                        </div>
                        <textarea
                            className="apply-for-task-page__textarea"
                            placeholder="Why are you a good fit for this task?"
                            maxLength={200}
                            onChange={(e) => setMsgLen(e.target.value.length)}
                            rows={5}
                        />
                        <p className="apply-for-task-page__hint">
                            Sharing relevant experience helps you stand out from other applicants.
                        </p>
                    </section>

                    <section className="apply-for-task-page__section">
                        <p className="apply-for-task-page__section-title">Availability Confirmation</p>
                        <div className="apply-for-task-page__options">
                            <SelectionOption
                                name="avail"
                                value="available"
                                checked={availability === 'available'}
                                onChange={setAvailability}
                            >
                                I am available at this time
                            </SelectionOption>
                            <SelectionOption
                                name="avail"
                                value="alternate"
                                checked={availability === 'alternate'}
                                onChange={setAvailability}
                            >
                                Suggest alternate time option
                            </SelectionOption>
                        </div>
                    </section>

                    <section className="apply-for-task-page__section">
                        <p className="apply-for-task-page__section-title">Price Confirmation</p>
                        <div className="apply-for-task-page__fixed-budget">
                            <span className="apply-for-task-page__fb-label">Fixed Budget</span>
                            <span className="apply-for-task-page__fb-val">350 EGP</span>
                        </div>
                        <div className="apply-for-task-page__offer">
                            <div className="apply-for-task-page__offer-top">
                                <span>Your Offer</span>
                                <span className="apply-for-task-page__negotiable">Negotiable</span>
                            </div>
                            <div className="apply-for-task-page__offer-input">
                                <span className="apply-for-task-page__offer-prefix">EGP</span>
                                <span className="apply-for-task-page__offer-num">350</span>
                            </div>
                            <p className="apply-for-task-page__range">
                                Typical range for this task: 315 - 420 EGP
                            </p>
                        </div>
                    </section>

                    <SafetyFirst />

                    <h2 className="apply-for-task-page__similar-title">SIMILAR TASKS</h2>
                    <div className="apply-for-task-page__grid">
                        {similarTasks.map((t) => (
                            <TaskCard
                                key={t.id}
                                variant="tasksGrid"
                                title={t.title}
                                subtitle={t.subtitle}
                                price={t.price}
                                bgImage={gridCat}
                            />
                        ))}
                    </div>

                    <PrimaryButton type="button">Explore more</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ApplyForTheTask;
