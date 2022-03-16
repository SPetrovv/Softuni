from project.category import Category
from project.document import Document
from project.storage import Storage
from project.topic import Topic

c1 = Category(1, "work")
t1 = Topic(1, "daily tasks", "C:\\work_documents")
d1 = Document(1, 1, 1, "finilize project")
d2 = Document(2, 2, 2, "learn python")

d1.add_tag("urgent")
d1.add_tag("work")
d2.add_tag("study")
d2.add_tag("python")

storage = Storage()
storage.add_category(c1)
storage.add_topic(t1)
storage.add_document(d1)
storage.add_document(d2)

print(c1)
print(t1)
print(storage.get_document(1))
print(storage)