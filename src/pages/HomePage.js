import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../redux/actions/profile/Profile'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'

const HomePage = () => {

    const dispatch = useDispatch()

    const { profileListData } = useSelector(state => state.ProfilDataReducer)
    const { loadedProfileListDataCount } = useSelector(state => state.ProfilDataReducer)
    const { totalProfileListDataCount } = useSelector(state => state.ProfilDataReducer)
    const { profileListDataPage } = useSelector(state => state.ProfilDataReducer)

    const { profileListDataLoading } = useSelector(state => state.ProfilDataReducer)


    const iniateProfileDataCall = (refreshList = false) => {
        let newPage = profileListDataPage + 1;
        if (refreshList) {
            newPage = 1;
        } else if (totalProfileListDataCount <= loadedProfileListDataCount) {
            return;
        }
        let start = (newPage - 1) * 10 + 1;
        let end = newPage * 10;
        dispatch(getProfileData({ _start: start, _end: end }))

    }

    useEffect(() => {
        iniateProfileDataCall(true)
    }, [])
    return (
        <>
            <div className="container mx-auto px-4 ">
                <div className='w-fit mx-auto'>
                    <button className='mx-auto bg-teal-500 text-white  px-2 py-3 rounded-lg mt-5 hover:bg-orange-600	 shadow-md'>
                        Click Here to see the Demo!
                    </button>
                </div>
                <div className='border-t-2 border-indigo-600 my-5'>
                    <InfiniteScroll
                        className=''
                        dataLength={loadedProfileListDataCount}
                        hasMore={loadedProfileListDataCount < totalProfileListDataCount}
                        next={() => {
                            iniateProfileDataCall()
                        }}
                    >
                        <div className="grid grid-cols-4 font-medium " >

                            {
                                profileListData?.length > 0 ?
                                    profileListData.map((item, index) =>

                                        <div className="card-main shadow-xl my-2 p-5 rounded">
                                            <div className="image">
                                                <img className='w-full h-48 object-cover rounded ' src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="image" />
                                            </div>
                                            <h4 className='truncate text-xl text-center tracking-wide my-2 text-cyan-500'>
                                                {item?.title}
                                            </h4>
                                            <p className='font-normal line-clamp-4	'>
                                                {item?.body}
                                            </p>
                                        </div>
                                    ) : !profileListDataLoading ? <div className="">There is No data Available</div> : null
                            }
                            {
                                profileListDataLoading ?
                                    [...Array(8)].map((item, index) =>

                                        <div className="card-main shadow-xl my-2 p-5 rounded">
                                            <div className="image">
                                                <div className='w-full h-48 object-cover rounded '>
                                                    <Skeleton height={"100%"} width={"100%"} />
                                                </div>
                                            </div>
                                            <div className='my-3 mx-auto w-1/2'>
                                                <Skeleton height={30} width={"100%"} />
                                            </div>
                                            <Skeleton className='mb-1' height={18} width={"100%"} />
                                            <Skeleton className='mb-1' height={18} width={"100%"} />
                                            <Skeleton className='mb-1' height={18} width={"100%"} />
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </InfiniteScroll>
                </div >
            </div >
        </>
    )
}
export default HomePage




