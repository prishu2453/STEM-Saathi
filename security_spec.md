# STEM Saathi Security Specification

## 1. Data Invariants
- Users may only read and write their own `/users/{userId}/private/info`, `/users/{userId}/progress/main`, and `/users/{userId}/learning/state` documents when `request.auth.uid == userId` and `request.auth.token.email_verified == true`.
- `/users/{userId}/learning/state` validates `classLevel` (int 6..12), `board` enum (`cbse`, `cisce`, `state`, `other`), `session` enum (`2025-26`, `2024-25`), bounded arrays (`completedChapterIds` <= 100, `studiedTopicIds` <= 250, `completedExperimentIds` <= 120, `bookmarkedTopicIds` <= 100, `recentChapterIds` <= 20), `chapterQuizScores` map <= 100, and non-negative `learningTimeSeconds`.
- User profiles isolate PII (`email`) inside `/users/{userId}/private/info` away from `/users/{userId}/public/profile`.
- Document IDs (`userId`, `assignmentId`) must match `^[a-zA-Z0-9_-]+$` and be <= 128 chars.
- All timestamp fields (`createdAt`, `updatedAt`) must equal `request.time`.
- Users cannot self-assign `admin` role in `/users/{userId}/public/profile` (`role` on create/update is restricted to `'student'` or `'teacher'` unless `isAdmin()`).
- Shadow fields and unknown keys are rejected via `keys().hasAll(...)` and `keys().hasOnly(...)` + `affectedKeys().hasOnly(...)`.

## 2. Adversarial Payloads ("Dirty Dozen")
1. Unauthenticated read/write to `/users/uid1/progress/main` -> PERMISSION_DENIED
2. Cross-user write to `/users/uid2/progress/main` by `uid1` -> PERMISSION_DENIED
3. Unverified email (`email_verified: false`) writing `/users/uid1/progress/main` -> PERMISSION_DENIED
4. Shadow field injection (`isAdmin: true`) on `/users/uid1/public/profile` -> PERMISSION_DENIED
5. Self-escalating `role: "admin"` on `/users/uid1/public/profile` -> PERMISSION_DENIED
6. Oversized string (`displayName.size() > 80`) on `/users/uid1/public/profile` -> PERMISSION_DENIED
7. Unbounded array (`completedModules.size() > 50`) on `/users/uid1/progress/main` -> PERMISSION_DENIED
8. Client-spoofed `updatedAt` != `request.time` -> PERMISSION_DENIED
9. Non-owner reading `/users/uid2/private/info` (PII leak) -> PERMISSION_DENIED
10. Invalid `assignmentId` with slash/junk (>128 chars) -> PERMISSION_DENIED
11. Spoofed `authorUid` on `/assignments/{id}` != `request.auth.uid` -> PERMISSION_DENIED
12. Modifying immutable `createdAt` or `authorUid` on `/assignments/{id}` update -> PERMISSION_DENIED
13. Invalid `classLevel` (e.g. 99) or unverified board enum on `/users/uid1/learning/state` -> PERMISSION_DENIED

