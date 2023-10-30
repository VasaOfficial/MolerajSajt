'use client';

import { useState } from 'react';

interface EditReviewProps {
  review: {
    id: number;
    name: string;
    feedback: string;
    rating: number;
  };
  onSave: (updatedReview: any) => void;
  onCancel: () => void;
}

export function EditReview({ review, onSave, onCancel }: EditReviewProps) {
  const [editedReview, setEditedReview] = useState(review.feedback);
  const [editedRating, setEditedRating] = useState(review.rating);
  const [editedName, setEditedName] = useState(review.name);

  const handleSave = () => {
    const updatedReview = {
      ...review,
      feedback: editedReview,
      rating: editedRating,
      name: editedName,
    };

    onSave(updatedReview);
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <div className="w-80 rounded bg-white p-4 shadow-md">
        <h2 className="mb-2 text-lg font-semibold">Izmeni recenziju</h2>
        <input
          type="text"
          placeholder="Name"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="mb-2 w-full rounded border p-2"
        />
        <textarea
          placeholder="Feedback"
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
          className="mb-2 w-full resize-none rounded border p-2"
        />
        <input
          type="number"
          placeholder="Rating"
          value={editedRating}
          onChange={(e) => setEditedRating(Number(e.target.value))}
          className="mb-2 w-full rounded border p-2"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="btn-primary mr-2"
          >
            Save
          </button>
          <button type="button" onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
