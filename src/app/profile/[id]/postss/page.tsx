"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function Post() {
  const params = useParams();
  console.log(params);
  return (
    <div>Post</div>
  )
}
