"use client";
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

export default function ProfileId() {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h1>Profile ID: {params.id}</h1>
      <div onClick={() => router.push('/profile')}>Back to main page</div>
    </div>
  )
}
