import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useUser } from '../context/UserContext';
import MobileTool from '../components/MobileTool';
import PageHeaderBack from '../components/PageHeaderBack';
import ProfilePreviewCard from '../components/ProfilePreviewCard';
import TaskSummaryCard from '../components/TaskSummaryCard';
import SelectionOption from '../components/SelectionOption';
import SafetyFirst from '../components/SafetyFirst';
import TaskCard from '../components/TaskCard';
import PrimaryButton from '../components/PrimaryButton';
import './APPLY FOR THE task.css';

const fallbackImage =
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop';
const gridCat =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop';

const ApplyForTheTask = () => {
    const { state } = useLocation();
    const task = state?.task || {};
    const { user } = useUser();

    const [msgLen,        setMsgLen]        = useState(0);
    const [availability,  setAvailability]  = useState('available');
    const [offerPrice,    setOfferPrice]    = useState(task.price ? String(task.price) : '');
    const [message,       setMessage]       = useState('');
    const [similarTasks,  setSimilarTasks]  = useState([]);
    const [submitting,    setSubmitting]    = useState(false);
    const [submitted,     setSubmitted]     = useState(false);

    useEffect(() => {
        const fetchSimilar = async () => {
            let query = supabase
                .from('page_tasks')
                .select('*')
                .limit(4);
            if (task.category) query = query.eq('category', task.category);
            if (task.id)       query = query.neq('id', task.id);
            const { data } = await query;
            if (data) setSimilarTasks(data);
        };
        fetchSimilar();
    }, [task.id, task.category]);

    const handleSubmit = async () => {
        if (submitted || submitting) return;
        setSubmitting(true);
        await supabase.from('task_applications').insert({
            task_id:      task.id,
            applicant_id: user?.id,
            message,
            availability,
            offer_price:  offerPrice ? Number(offerPrice) : null,
        });
        setSubmitting(false);
        setSubmitted(true);
    };

    // Build meta rows from whatever task fields are populated
    const metaRows = [];
    if (task.scheduled_date) metaRows.push({ type: 'date',     text: new Date(task.scheduled_date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) });
    if (task.time_note)      metaRows.push({ type: 'time',     text: task.time_note });
    if (task.location)       metaRows.push({ type: 'location', text: task.location });
    if (task.duration_min)   metaRows.push({ type: 'time',     text: `${task.duration_min} min` });
    if (metaRows.length === 0) {
        metaRows.push({ type: 'date',     text: 'Mon, Feb 16' });
        metaRows.push({ type: 'time',     text: '10:00 AM – 2:00 PM' });
        metaRows.push({ type: 'location', text: 'Cairo, Egypt' });
    }

    const displayPrice = task.price ? `${task.price} EGP` : '350 EGP';
    const typicalMin   = task.price ? Math.round(task.price * 0.9)  : 315;
    const typicalMax   = task.price ? Math.round(task.price * 1.2)  : 420;

    return (
        <div className="apply-for-task-page">
            <MobileTool />
            <div className="apply-for-task-page__scroll">
                <div className="apply-for-task-page__inner">
                    <PageHeaderBack title="APPLY FOR THE TASK" />

                    <ProfilePreviewCard />
                    <p className="apply-for-task-page__profile-caption">
                        This is how your profile appears to the task poster.
                    </p>

                    <TaskSummaryCard
                        imageUrl={task.bg_image || task.image_url || fallbackImage}
                        title={task.title || 'Task'}
                        price={displayPrice}
                        metaRows={metaRows}
                    />

                    {task.description && (
                        <section className="apply-for-task-page__section">
                            <p className="apply-for-task-page__section-title">About this task</p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                                {task.description}
                            </p>
                        </section>
                    )}

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
                            onChange={(e) => {
                                setMsgLen(e.target.value.length);
                                setMessage(e.target.value);
                            }}
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
                            <span className="apply-for-task-page__fb-val">{displayPrice}</span>
                        </div>
                        <div className="apply-for-task-page__offer">
                            <div className="apply-for-task-page__offer-top">
                                <span>Your Offer</span>
                                <span className="apply-for-task-page__negotiable">Negotiable</span>
                            </div>
                            <div className="apply-for-task-page__offer-input">
                                <span className="apply-for-task-page__offer-prefix">EGP</span>
                                <span className="apply-for-task-page__offer-num">{offerPrice || displayPrice.replace(' EGP','')}</span>
                            </div>
                            <p className="apply-for-task-page__range">
                                Typical range for this task: {typicalMin} - {typicalMax} EGP
                            </p>
                        </div>
                    </section>

                    <SafetyFirst />

                    {similarTasks.length > 0 && (
                        <>
                            <h2 className="apply-for-task-page__similar-title">SIMILAR TASKS</h2>
                            <div className="apply-for-task-page__grid">
                                {similarTasks.map((t) => (
                                    <TaskCard
                                        key={t.id}
                                        variant="available"
                                        title={t.title}
                                        subtitle={t.description}
                                        price={t.price}
                                        bgImage={t.bg_image || t.image_url || gridCat}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    <PrimaryButton
                        type="button"
                        onClick={handleSubmit}
                        disabled={submitting || submitted}
                    >
                        {submitted ? 'Applied ✓' : submitting ? 'Submitting...' : 'Apply for Task'}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ApplyForTheTask;
