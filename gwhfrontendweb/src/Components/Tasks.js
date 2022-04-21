import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import TaskCard from './TaskCard';
import TasksArray from './TasksArray';

function Tasks() {

    return (
        <>
            <h4>Daily Tasks</h4>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    650: {
                        slidesPerView: 1,
                    },
                    850: {
                        slidesPerView: 2
                    },
                    950: {
                        slidesPerView: 3
                    }
                }
                }
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                spaceBetween={10}
            >
                {
                    TasksArray.map((task) => {
                        return <SwiperSlide key={task.id}>
                            <TaskCard taskName={task.taskName} image={task.image} btnTxt={task.btnTxt} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Tasks