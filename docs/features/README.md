# Features
- Overview of the features this system provides

---

# Applications

## shota
- Web app for end user

### Pages
#### Top
- Show realtime trend
- Show recent threads
- Show recent comments

#### Thread
- Show thread info
- Show thread messages
- Use forum

#### Thread list
- Search for thread
- Open thread

#### View history
- Lists history of threads

### Feature candidate
- comment history

### Misc
- Use cookie to distinguish end users


## admin
- Administrator app to manage shota

### Features
- Create thread
    - Import thread from 5ch
- Edit thread
- Delete
- Dashboard
    - Most viewed thread
    - Comments

#### Editing thread
- pick posts to include
- remove picked posts
- save

---

# Models
## ThreadSummaryForum
- id: int
- thread_id: int FK

## ThreadSummaryForumPost
- id: int
- user_id: string
- thread_summary_forum_id: number
- post_id: int
- content: text
- created_at: timestamp;

## ThreadSummaryView
- id: int
- user_id: string;
- thread_id: int FK
- created_at: timestamp
