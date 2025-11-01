'use client';

import { useState } from 'react';

export default function CommentCard() {
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            //onSubmit(comment);
            setComment('');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[120px]"
                        placeholder="Write your comment here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                        disabled={!comment.trim()}
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
}