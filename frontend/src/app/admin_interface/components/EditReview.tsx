'use client'

import { useState } from "react";

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
    // Create an object with the updated values
    const updatedReview = {
      ...review,
      feedback: editedReview,
      rating: editedRating,
      name: editedName,
    };

    // Call the onSave callback with the updated review
    onSave(updatedReview);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white p-4 rounded shadow-md w-80">
        <h2 className="text-lg font-semibold mb-2">Izmeni recenziju</h2>
        <input
          type="text"
          placeholder="Name"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Feedback"
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
          className="w-full p-2 mb-2 border rounded resize-none"
        />
        <input
          type="number"
          placeholder="Rating"
          value={editedRating}
          onChange={(e) => setEditedRating(Number(e.target.value))}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="flex justify-end">
          <button onClick={handleSave} className="btn-primary mr-2">
            Save
          </button>
          <button onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
