import React from 'react'
//Components
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function MainSkeleton() {
    return (
        <div className="mainSkeleton">
        <SkeletonElement type="avatar"/>
        <SkeletonElement type="title"/>
        <Shimmer/>
        </div>
    )
}

export default MainSkeleton
